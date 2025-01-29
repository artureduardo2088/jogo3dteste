let scene, camera, renderer, cube;

function init() {
  // Cria a cena
  scene = new THREE.Scene();
  
  // Configura a câmera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Configura o renderizador
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Adiciona um cubo
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

function animate() {
  requestAnimationFrame(animate);

  // Animação do cubo (rotação)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  // Atualiza o tamanho do renderizador e da câmera quando a janela é redimensionada
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

init();
animate();
