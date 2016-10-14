function Projectile(game, image, width, height){
  tProjectile = new Sprite(game, image, width, height);
  tProjectile.setBoundAction(CONTINUE);
  tProjectile.mass = 100;
  tProjectile.affectedByGravity = true;
  return tProjectile;
} // object definition
