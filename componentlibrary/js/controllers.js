/**
 * klxTemplate - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {
    this.userName = 'Example user';
    this.helloText = 'Welcome to Gtiles Console';
    this.descriptionText = '';
};


angular
    .module('klxComponent')
    .controller('MainCtrl', MainCtrl)