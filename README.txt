Goal of game:
  The goal is to launch the sun off the screen at at least 20 pixels / second!
  If you win or lose then it notifies you but you can still have fun playing around.
  
Game Elements:
  GravityRoom:
    I basically reused Andy's orbit idea and generalized it to work with many object all interacting with each other
    This room is what implements/houses that functionality
    It 'has many' projectiles that are affected by gravity
  Sun/Ship:
    Description: this is a sprite that has been given projectile like properties
    When these colide/and to prevent them from shooting off super fast, they actually ignore gravity for that frame
    When leaving screen (plus some threshold value), they are popped off of the list of projectiles in GravityRoom
    One sun and 2 ships are pre generated on game start
    You can left click to make more ships.
  Background:
    A static sprite