angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('profileCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('currentAlarmsCtrl', ['$rootScope', '$state', '$cordovaLocalNotification', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $state, $cordovaLocalNotification ,$stateParams) {
	$rootScope.data = {};
	$rootScope.setAlarm = function(){
		if($rootScope.data.advil) { // toggle for advil is checked
			 $rootScope.add = function() {
        	var alarmTime1 = new Date();
        	alarmTime1.setMinutes(alarmTime1.getMinute() + 240);
        	$cordovaLocalNotification.add({
            	id: "1",
            	date: alarmTime1,
            	message: "This is a message",
            	title: "This is a title",
            	autoCancel: true,
            	sound: null
        		}).then(function () {
            		console.log("The notification for Advil has been set");
				})
			}
		}
		if($rootScope.data.aleve) { // toggle for aleve is checked
			 $rootScope.add = function() {
        	var alarmTime2 = new Date();
        	alarmTime2.setMinutes(alarmTime2.getMinutes() + 480);
        	$cordovaLocalNotification.add({
            	id: "2",
            	date: alarmTime2,
            	message: "You may now take a dose of Aleve.",
            	title: "Dosage Reminder!",
            	autoCancel: true,
            	sound: null
        		}).then(function () {
            		console.log("The notification for Aleve has been set");
				})
			}
		}
		if($rootScope.data.allegra) { // toggle for allegra is checked
			 $rootScope.add = function() {
        	var alarmTime3 = new Date();
        	alarmTime3.setMinutes(alarmTime3.getMinutes() + 1440);
        	$cordovaLocalNotification.add({
            	id: "3",
            	date: alarmTime3,
            	message: "You may now take a dose of Allegra.",
            	title: "Dosage Reminder!",
            	autoCancel: true,
            	sound: null
        		}).then(function () {
            		console.log("The notification for Allegra has been set");
				})
			}
		}
		if($rootScope.data.benedryl) { // toggle for benedryl is checked
			 $rootScope.add = function() {
        	var alarmTime4 = new Date();
        	alarmTime4.setMinutes(alarmTime4.getMinutes() + 240);
        	$cordovaLocalNotification.add({
            	id: "4",
            	date: alarmTime4,
            	message: "You may now take a dose of Benedryl.",
            	title: "Dosage Reminder!",
            	autoCancel: true,
            	sound: null
        		}).then(function () {
            		console.log("The notification for Benedryl has been set");
				})
			}
		}
		if($rootScope.data.nyquil) { // toggle for nyquil is checked
			 $rootScope.add = function() {
        	var alarmTime5 = new Date();
        	alarmTime5.setMinutes(alarmTime5.getMinutes() + 360);
        	$cordovaLocalNotification.add({
            	id: "5",
            	date: alarmTime5,
            	message: "You may now take a dose of NyQuil.",
            	title: "Dosage Remind!",
            	autoCancel: true,
            	sound: null
        		}).then(function () {
            		console.log("The notification for NyQuil has been set");
				})
			}
		}
		if($rootScope.data.robitussin) { // toggle for robitussin is checked
			 $rootScope.add = function() {
        	var alarmTime6 = new Date();
        	alarmTime6.setMinutes(alarmTime6.getMinutes() + 240);
        	$cordovaLocalNotification.add({
            	id: "6",
            	date: alarmTime6,
            	message: "You may now take a dose of Robitussin.",
            	title: "Dosage Reminder!",
            	autoCancel: true,
            	sound: null
        		}).then(function () {
            		console.log("The notification for Robitussin has been set");
				})
			}
		}
		if($rootScope.data.tylenol) { // toggle for tylenol is checked
			 $rootScope.add = function() {
        	var alarmTime7 = new Date();
        	alarmTime6.setMinutes(alarmTime7.getMinutes() + 240);
        	$cordovaLocalNotification.add({
            	id: "7",
            	date: alarmTime7,
            	message: "You may now take a dose of Tylenol.",
            	title: "Dosage Reminder!",
            	autoCancel: true,
            	sound: null
        		}).then(function () {
            		console.log("The notification for Tylenol has been set");
				})
			}
		}
   }
  }])
.controller('mainMenuCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('loginCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('recommendationsCtrl', ['$rootScope', '$state', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $state, $stateParams) {
	$rootScope.data = {};
	$rootScope.Recommend = function() {
		//var value = 0, a = "a", b = "b", c = "c", d = "d", e = "e", f = "f", g = "g", h = "h", i = "i", j = "j";
		var value = 0, a = 1, b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8, i = 9, j = 12;
		var medication;
		if ($rootScope.data.allergies) //toggle for allergies is checked
			value = value + a;
		if ($rootScope.data.arthritisPain) //toggle for arthritis pain is checked
			value = value + b;
		if ($rootScope.data.bodyAches) //toggle for body aches is checked
			value = value + c;
		if($rootScope.data.congestion) //toggle for congestion is checked
			value = value + d;
		if ($rootScope.data.coughing) //toggle for coughing is checked
			value = value + e;
		if ($rootScope.data.fever) //toggle for fever is checked
			value = value + f;
		if ($rootScope.data.headache) //toggle for headache is checked
			value = value + g;
		if ($rootScope.data.sleepDeprivation) //toggle for sleep deprevation is checked
			value = value + h;
		if ($rootScope.data.sneezing) // toggle for sneezing is checked
			value = value + i;
		if ($rootScope.data.swelling) //toggle for swelling is checked
			value = value + j;
		if ( value == ( c + g ))
			$rootScope.medication = "Aleve";
		if (value == ( b + f + j ))
			$rootScope.medication = "Advil";
		if (value == ( c + f + g ))
			$rootScope.medication = "Tylenol";
		if (value == ( d + e + h + i ))
			$rootScope.medication = "NyQuil";
		if (value == ( a + d + e + h + i))
			$rootScope.medication = "Benedryl";
		if (value == ( a + d + e + i))
			$rootScope.medication = "Allegra";
		if (value == ( d + e + i ))
			$rootScope.medication = "Robitussin";
		console.log($rootScope.medication);
		$state.go('recommendations2', {medication: $rootScope.medication});
	}
}])
   
.controller('signupCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('oTCCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('editProfileCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('aboutCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('forgotUsernameCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('usernameConfirmationCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('forgotPasswordCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('passwordConfirmationCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('optionsCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('changePasswordCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('notificationsCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('about2Ctrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('contactUsCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('submittedCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('dosageCalculatorCtrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('dosageCalculator2Ctrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {


}])
   
.controller('recommendations2Ctrl', ['$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($rootScope, $stateParams) {
	$rootScope.data = {};
	$rootScope.Recommend = function() {
		//var value = 0, a = "a", b = "b", c = "c", d = "d", e = "e", f = "f", g = "g", h = "h", i = "i", j = "j";
		var value = 0, a = 1, b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8, i = 9, j = 12;
		var medication;
		if ($rootScope.data.allergies) //toggle for allergies is checked
			value = value + a;
		if ($rootScope.data.arthritisPain) //toggle for arthritis pain is checked
			value = value + b;
		if ($rootScope.data.bodyAches) //toggle for body aches is checked
			value = value + c;
		if($rootScope.data.congestion) //toggle for congestion is checked
			value = value + d;
		if ($rootScope.data.coughing) //toggle for coughing is checked
			value = value + e;
		if ($rootScope.data.fever) //toggle for fever is checked
			value = value + f;
		if ($rootScope.data.headache) //toggle for headache is checked
			value = value + g;
		if ($rootScope.data.sleepDeprivation) //toggle for sleep deprevation is checked
			value = value + h;
		if ($rootScope.data.sneezing) // toggle for sneezing is checked
			value = value + i;
		if ($rootScope.data.swelling) //toggle for swelling is checked
			value = value + j;
		if ( value == ( c + g ))
			medication = "Aleve";
		if (value == ( b + f + j ))
			medication = "Advil";
		if (value == ( c + f + g ))
			medication = "Tylenol";
		if (value == ( d + e + h + i ))
			medication = "NyQuil";
		if (value == ( a + d + e + h + i))
			medication = "Benedryl";
		if (value == ( a + d + e + i))
			medication = "Allegra";
		if (value == ( d + e + i ))
			medication = "Robitussin";
		$state.go('recommendations2', {medication: medication});
	}
}])

 