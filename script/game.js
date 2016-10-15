function Projectile(game, image, width, height){
  tProjectile = new Sprite(game, image, width, height);
  tProjectile.setBoundAction(CONTINUE);
  tProjectile.mass = 50;
  tProjectile.radius = (width + height) / 2; //1.4142 is sqrt(2)
  tProjectile.affectedByGravity = true;
  tProjectile.projectsGravity = true;

  return tProjectile;
} // object definition

function GravityRoom(game)
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
    for(var i = this.projectiles.length - 1; i > -1; i--)
    {
      if(this.projectiles[i].isNearBounds(150)) //within 100 units outside of edge
      {
        this.projectiles[i].imgAngle = this.projectiles[i].moveAngle;
        this.projectiles[i].update();
      }
      else {
        this.removeProjectile(this.projectiles[i]);
      }
    }
  }

  this.addProjectile = function(projectile)
  {
    this.projectiles.push(projectile);
  }

  this.removeProjectile = function(projectile)
  {
    var index = this.projectiles.indexOf(projectile);
    if(index > -1)
    {
      var removed = this.projectiles.splice(index, 1);
    }
  }
}
