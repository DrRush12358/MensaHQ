/* 
 * Copyright (c) 2016, James
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */



var viewWidth = Math.max( window.innerWidth, document.body.clientWidth );
var viewHeight = Math.max( window.innerHeight, document.body.clientHeight );


//Set single or double page layout based on screen orinetation.
var layout = 'double';

if (viewHeight >= viewWidth){
    layout = 'single';
}

//Add a class reflecting whether double or single page layout for CSS sizing.

if (layout === 'single'){
    $('#flipbook').addClass('single');
}
else {
    $('#flipbook').addClass('double');
}

//Set a defualt ratio multiplier of 4:3 for double layout.
var ratio = 1.3333;

//Reset ratio multiplier to 2:3 for sigle layout.

if (layout === 'single'){
    ratio = 0.6666;
}

//while loops run through incremently smaller sizes until a size set is selected
// that fits the screen.

var sizeSet = false;
var finalWidth = 0;
var finalHeight = 200;
while(!sizeSet){
    //Add 100 px to the height until it matches screen height.
    finalHeight = finalHeight + 100;
    //Set relative width from finalHeight using the value from ratio.
    finalWidth = finalHeight * ratio;
    
        console.log('Pre-if Page height: ' + finalHeight);
        console.log('Pre-if Page width: ' + finalWidth);
    //Check height & width against the screen window size & run finer loop if it
    //exceeds them.
    if (finalHeight >= viewHeight || finalWidth >= viewWidth){
        finalHeight = (finalHeight - 100) * 0.95;
        finalWidth = Math.round(finalHeight * ratio);
        console.log('Page height: ' + finalHeight);
        console.log('Page width: ' + finalWidth);
        sizeSet = true;
        
        
        //Set page numbering square size in relation to page size.
        var pnSize = finalHeight * 0.05;
        $('.pn').css({'height':pnSize, 'width':pnSize});
        
    }
    
}

console.log('Page height outside of loop: ' + finalHeight);
console.log('Page width outside of loop: ' + finalWidth);



//initialize the flipbbok.
$(function() {
    $("#flipbook").turn({
        autoCenter: true,
        display: layout,
        width: finalWidth,
        height: finalHeight,
        //Events
        when: {

			turning: function(event, page, view) {
				
				var book = $(this),
				currentPage = book.turn('page'),
				pages = book.turn('pages');
		
				// Update the current URI

				Hash.go('page/' + page).update();
                            }
                        }
                    });
                });
// URIs - Format #/page/1 

	Hash.on('^page\/([0-9]*)$', {
		yep: function(path, parts) {
			var page = parts[1];

			if (page!==undefined) {
				if ($('#flipbook').turn('is'))
					$('#flipbook').turn('page', page);
			}

		},
		nop: function(path) {

			if ($('.magazine').turn('is'))
				$('.magazine').turn('page', 1);
		}
	});
        