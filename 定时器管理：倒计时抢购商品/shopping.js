
function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
		
	}, 30);
}

function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }

function shake ( obj, attr, endFn ) {
	
	if ( obj.onOff ) return;
	obj.onOff = true;
	
	var pos = parseInt( getStyle(obj, attr) );			// 有隐患的
	
	var arr = [];			// 20, -20, 18, -18 ..... 0
	var num = 0;
	var timers = null;
		
	for ( var i=10; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
		
	clearInterval( obj.shake );
	obj.shake = setInterval(function (){
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if ( num === arr.length ) {
			clearInterval( obj.shake );
			endFn && endFn();
			obj.onOff = false;
		}
	}, 50);
}



function opacity(obj,dir,target){
                  // 判断当前的位置是不是大于目标点，小于dir就是正值，大于dir就是负值
                  dir=Number(getStyle(obj,'opacity'))<target? dir:-dir
                  // alert(dir)

                   clearInterval(obj.opaTimer);
                   obj.opaTimer=setInterval(function(){
                        var speed=Number(getStyle(obj,'opacity'))+dir
                         // alert(speed)
                        if(speed<target&&dir<0||speed>target&&dir>0){
                              speed=target;
                        }
                   obj.style.opacity=speed;
                   // alert(speed)

                   if(speed===target){
                        clearInterval(obj.opaTimer);
                       
                   }
                  },100);
             }
