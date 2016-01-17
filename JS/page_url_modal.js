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


//Get the current URL hash & assign it the variable urlHash. Also get
        //the rest of the url & assign it to urlFull.

var urlPath = window.location.pathname.split('/');
var urlHash = window.location.hash;
console.log(urlPath);
console.log(urlHash);

//Convert hash to just a page number & assign it to the var pageNumber.
var pageNumber = urlHash.replace('#page/', '');
console.log('pageNumber = ', pageNumber);

//Switch statement determines which booklet is being used for later use &
//assians it to the variable bookletName.

var bookletName = 'unset booklet name';
switch(urlPath[4]) {
    case 'book_frame.html':
        bookletName = 'book.php';
        break;
    case 'circles_frame.html':
        bookletName= 'circles.php';
        break;
    default:
        bookletName = 'invalid booklet entered';
}

var page = 'https://MensaHQ.com/' + bookletName + '/' + urlHash;

modalWin = new CreateModalPopUpObject();

modalWin.ShowMessage('This Modal Popup Window using Javascript',200,400,'User Information');