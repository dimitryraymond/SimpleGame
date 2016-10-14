function Projectile(game, image, width, height){
  tProjectile = new Sprite(game, image, width, height);
  tProjectile.setBoundAction(CONTINUE);
  tProjectile.mass = 50;
  tProjectile.radius = (width + height) / 2; //1.4142 is sqrt(2)
  tProjectile.affectedByGravity = true;
  tProjectile.projectsGravity = true;
  return tProjectile;
} // object definition

function GravityRoom()
{
  this.GRAVITY_RATIO = 100;
  this.projectiles = [];

  this.applyGravity = function()
  {
    //apply gravity of each object to all the other objects
    for(var i = 0; i < this.projectiles.length; i++) //applied to
    {
      if(this.projectiles[i].affectedByGravity)
      {
        for(var j = 0; j < this.projectiles.length; j++) //applied by
        {
          if(j != i) //don't apply gravity to self
          {
            if(this.projectiles[j].projectsGravity)
            {
              dist = this.projectiles[j].distanceTo(this.projectiles[i]);
              if(dist > this.projectiles[i].radius + this.projectiles[i].radius) //fix for objects shooting off
              {
                dir = this.projectiles[j].angleTo(this.projectiles[i]);
                force = this.GRAVITY_RATIO * (this.projectiles[i].mass * this.projectiles[j].mass) / (dist * dist);
                this.projectiles[i].addVector(dir, force / this.projectiles[i].mass);
              }
            }
          }
        }
      }
    }
  }

  this.updateAllProjectiles = function()
  {
    for(var i = 0; i < this.projectiles.length; i++)
    {
      this.projectiles[i].update();
    }
  }
}

//Thank you very much Andy Harris for the started code to this (in case my teacher wants to sue me for copyright hehe)
// function checkGravity(){
//     GRAVITY_RATIO = 500;
//     //checks gravity pull of planet on ship
//     PLANET_MASS = 16;
//     SHIP_MASS = 4;
//     dist = ship.distanceTo(planet);
//     dir = planet.angleTo(ship);
//     force = GRAVITY_RATIO * (PLANET_MASS * SHIP_MASS) / (dist * dist)
//     ship.addVector(dir, force / SHIP_MASS);
//     dirPlanet = ship.angleTo(planet);
//     forcePlanet = force;
//     planet.addVector(dirPlanet, forcePlanet / PLANET_MASS);
// } // end checkGravity
