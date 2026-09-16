(function init3DViewer() {
  const wrap = document.getElementById('hero3dGLB');
  if (!wrap) return;

  const CDN = 'https://cdn.jsdelivr.net/npm/three@0.128.0';
  const MODEL_PATH = 'models/Dubai Tower Hotel/';
  const OBJ_FILE = 'chain.obj';
  const MTL_FILE = 'chain.mtl';
  const EMBED = window.STACKLY_MODEL || null;

  let scene3d, camera, renderer, controls, raf = null;
  let statusEl = null;

  function setStatus(text, isError) {
    if (!statusEl) {
      statusEl = document.createElement('div');
      statusEl.className = 'viewer-status';
      wrap.appendChild(statusEl);
    }
    statusEl.textContent = text;
    statusEl.classList.toggle('error', !!isError);
  }

  function clearStatus() {
    if (statusEl) {
      statusEl.remove();
      statusEl = null;
    }
  }

  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    script.onerror = () => { setStatus('Could not load the 3D engine — check your internet connection.', true); };
    document.head.appendChild(script);
  }

  function ensureThree(callback) {
    if (window.THREE && THREE.OrbitControls && THREE.OBJLoader && THREE.MTLLoader) {
      callback();
      return;
    }
    loadScript(CDN + '/build/three.min.js', () => {
      loadScript(CDN + '/examples/js/controls/OrbitControls.js', () => {
        loadScript(CDN + '/examples/js/loaders/OBJLoader.js', () => {
          loadScript(CDN + '/examples/js/loaders/MTLLoader.js', callback);
        });
      });
    });
  }

  function initThree() {
    const width = wrap.clientWidth;
    const height = wrap.clientHeight;

    scene3d = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100000);
    camera.position.set(5, 3, 7);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;

    wrap.innerHTML = '';
    wrap.appendChild(renderer.domElement);

    scene3d.add(new THREE.AmbientLight(0xffffff, 1.7));

    const dir = new THREE.DirectionalLight(0xffffff, 2.6);
    dir.position.set(12, 18, 12);
    dir.castShadow = true;
    scene3d.add(dir);

    const fill = new THREE.DirectionalLight(0x88bbff, 1);
    fill.position.set(-10, 8, -10);
    scene3d.add(fill);

    const glow = new THREE.PointLight(0x00d4aa, 1.2, 20);
    glow.position.set(0, -0.5, 3);
    scene3d.add(glow);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.minDistance = 2;
    controls.maxDistance = 30;
    controls.minPolarAngle = 0.2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 0, 0);

    window.addEventListener('resize', resizeViewer);
  }

  function resizeViewer() {
    if (!renderer || !camera) return;
    const width = wrap.clientWidth;
    const height = wrap.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function normalizeModel(object) {
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    object.position.x -= center.x;
    object.position.y -= center.y;
    object.position.z -= center.z;

    const maxSize = Math.max(size.x, size.y, size.z);
    object.scale.setScalar(5 / maxSize);

    const newBox = new THREE.Box3().setFromObject(object);
    const newCenter = newBox.getCenter(new THREE.Vector3());
    object.position.x -= newCenter.x;
    object.position.y -= newCenter.y;
    object.position.z -= newCenter.z;

    return object;
  }

  function makeSkyTexture() {
    const c = document.createElement('canvas');
    c.width = 32;
    c.height = 512;
    const ctx = c.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, '#050d2a');
    g.addColorStop(0.34, '#0f4c81');
    g.addColorStop(0.48, '#58c8ff');
    g.addColorStop(0.52, '#123c66');
    g.addColorStop(0.6, '#04121f');
    g.addColorStop(1, '#02060f');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 32, 512);
    for (let i = 0; i < 26; i++) {
      ctx.fillStyle = 'rgba(255,255,255,' + (0.35 + Math.random() * 0.4) + ')';
      ctx.fillRect(Math.random() * 32, Math.random() * 200, 1, 1);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    return tex;
  }

  function makeTexture(w, h, draw) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    draw(c.getContext('2d'), w, h);
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }

  function glassTexture(topColor, bottomColor, windowColor, litChance) {
    return makeTexture(320, 640, (g, W, H) => {
      const gr = g.createLinearGradient(0, 0, 0, H);
      gr.addColorStop(0, topColor);
      gr.addColorStop(1, bottomColor);
      g.fillStyle = gr;
      g.fillRect(0, 0, W, H);
      const floors = 26, cols = 8;
      const cellW = W / cols, cellH = H / floors;
      for (let f = 0; f < floors; f++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellW + cellW * 0.12, y = f * cellH + cellH * 0.16;
          const w = cellW * 0.76, h = cellH * 0.66;
          if (Math.random() < litChance) {
            const wg = g.createLinearGradient(0, y, 0, y + h);
            wg.addColorStop(0, windowColor);
            wg.addColorStop(1, '#ffffff');
            g.fillStyle = wg;
            g.globalAlpha = 0.55 + Math.random() * 0.45;
          } else {
            g.fillStyle = 'rgba(6,20,40,0.9)';
            g.globalAlpha = 1;
          }
          g.fillRect(x, y, w, h);
          g.strokeStyle = 'rgba(255,255,255,0.06)';
          g.lineWidth = 2;
          g.strokeRect(x, y, w, h);
        }
      }
      g.globalAlpha = 1;
      g.strokeStyle = 'rgba(190,235,255,0.08)';
      g.lineWidth = 16;
      for (let i = -4; i < 12; i++) {
        g.beginPath();
        g.moveTo(i * 80, 0);
        g.lineTo(i * 80 - 90, H);
        g.stroke();
      }
    });
  }

  function structureTexture(baseColor, lines) {
    return makeTexture(256, 256, (g, W, H) => {
      g.fillStyle = baseColor;
      g.fillRect(0, 0, W, H);
      for (let i = 0; i < 900; i++) {
        g.fillStyle = 'rgba(' + (Math.random() < 0.5 ? '0,0,0' : '255,255,255') + ',' + (Math.random() * 0.05).toFixed(3) + ')';
        g.fillRect(Math.random() * W, Math.random() * H, 3, 3);
      }
      g.strokeStyle = 'rgba(0,0,0,0.10)';
      g.lineWidth = 3;
      for (let i = lines; i--;) {
        g.beginPath();
        g.moveTo((W / lines) * i, 0);
        g.lineTo((W / lines) * i, H);
        g.stroke();
      }
    });
  }

  function enhanceMaterials(root) {
    scene3d.environment = makeSkyTexture();
    const cache = {};
    const texFor = (name) => {
      if (cache[name]) return cache[name];
      const t = name === 'Mat.1' ? structureTexture('#9aa7b5', 6)
        : name === 'default' ? structureTexture('#e9e5dc', 4)
        : name === 'Mat.4' ? glassTexture('#0b4a2e', '#128a56', '#c9f7dd', 0.25)
        : name === 'Mat.5' ? glassTexture('#0a2f45', '#15618a', '#a6dcff', 0.2)
        : glassTexture('#0d3058', '#1a5a9c', '#ffd27f', 0.34);
      cache[name] = t;
      return t;
    };
    root.traverse((child) => {
      if (!child.isMesh) return;
      const old = child.material;
      const list = Array.isArray(old) ? old : [old];
      child.material = list.map((m) => {
        if (m && m.map) return m;
        const name = m ? m.name : '';
        const map = texFor(name);
        const isGlass = name !== 'Mat.1' && name !== 'default';
        return new THREE.MeshStandardMaterial({
          color: 0xffffff,
          map: map,
          emissive: new THREE.Color(0xffffff),
          emissiveMap: map,
          emissiveIntensity: isGlass ? 0.55 : 0.12,
          transparent: true,
          opacity: !isGlass ? 1 : (name === 'Mat.4' ? 0.85 : 0.55),
          metalness: isGlass ? 0.3 : 0.4,
          roughness: isGlass ? 0.32 : 0.6,
          envMapIntensity: isGlass ? 1.5 : 0.5
        });
      });
    });
  }

  function commit(object, label) {
    clearStatus();
    if (label) console.log(label);
    enhanceMaterials(object);
    const model = normalizeModel(object);
    scene3d.add(model);
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    camera.position.set(6, 3.5, 6);
    controls.target.set(0, 0, 0);
    controls.update();
    startRender();
  }

  function showError() {
    setStatus('Could not load chain.obj. Open the site through a local server (Live Server or "python -m http.server") and reload.', true);
  }

  // ---- Local files (works when served over http) ----
  function loadOBJModel() {
    setStatus('Loading 3D model…');
    const mload = new THREE.MTLLoader();
    mload.setPath(MODEL_PATH);
    mload.load(MTL_FILE, (materials) => {
      materials.preload();
      const oload = new THREE.OBJLoader();
      oload.setMaterials(materials);
      oload.setPath(MODEL_PATH);
      oload.load(OBJ_FILE, (object) => {
        commit(object, 'chain.obj loaded successfully');
      }, null, fallback);
    }, null, fallback);
  }

  // ---- Embedded base64 data (works even when opened via file://) ----
  function dataUri(b64) {
    return 'data:application/octet-stream;base64,' + b64;
  }

  function loadEmbedded() {
    if (!EMBED || !EMBED.obj) {
      showError();
      return;
    }
    setStatus('Loading embedded model…');
    const mload = new THREE.MTLLoader();
    mload.load(dataUri(EMBED.mtl), (materials) => {
      materials.preload();
      const oload = new THREE.OBJLoader();
      oload.setMaterials(materials);
      oload.load(dataUri(EMBED.obj), (object) => {
        commit(object, 'chain.obj loaded (embedded data)');
      }, null, loadEmbeddedOBJOnly);
    }, null, loadEmbeddedOBJOnly);
  }

  function loadEmbeddedOBJOnly() {
    const oload = new THREE.OBJLoader();
    oload.load(dataUri(EMBED.obj), (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: 0xbfc7d5, metalness: 0.6, roughness: 0.3 });
        }
      });
      commit(object, 'chain.obj loaded (embedded, no MTL)');
    }, null, showError);
  }

  function fallback() {
    if (EMBED && EMBED.obj) {
      loadEmbedded();
      return;
    }
    loadOBJWithoutMTL();
  }

  function loadOBJWithoutMTL() {
    const loader = new THREE.OBJLoader();
    loader.setPath(MODEL_PATH);
    loader.load(OBJ_FILE, (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: 0xbfc7d5, metalness: 0.6, roughness: 0.3 });
        }
      });
      commit(object, 'OBJ loaded without MTL');
    }, null, showError);
  }

  function animate() {
    raf = requestAnimationFrame(animate);
    if (controls) controls.update();
    if (renderer) renderer.render(scene3d, camera);
  }

  function startRender() {
    if (!raf) animate();
  }

  ensureThree(() => {
    initThree();
    loadOBJModel();
  });
})();