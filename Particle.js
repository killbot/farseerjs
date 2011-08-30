//Particle is the base class for all particle types.
function Particle(color_begin, color_final, x, y, speed, direction, lifetime){
    this.color_begin = color_begin;
    this.color_final = color_final;
    this.color_curr = this.color_begin;
    this.x_pos = x;
    this.y_pos = y;
    this.speed = speed;
    this.direction = direction*Math.PI/180; //input in degrees, converts to radians
    var x_unit_vector = Math.cos(this.direction);   //useful to avoid repeated
    var y_unit_vector = Math.sin(this.direction);   //common math calcs
    this.dx = this.speed * x_unit_vector;
    this.dy = this.speed * y_unit_vector;
    
    this.update = function(){
        this.x_pos += this.dx;
        this.y_pos += this.dy;
        
    }
    
    this.draw = function(){     //overload me plz
        
    }
    
}
