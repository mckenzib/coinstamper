/***
 * Coin press auto code
 * Author - Daddy
 ***/

coinPressInterval = window.setInterval(function () { playState.coinPressed(false) }, 50); //press coins every 50 ms
buyAllInterval = window.setInterval(function () { buyAll() }, 5000); // run upgrades every 5 seconds (otherwise, too fast)
toggleSound(playState.soundButton)  // turn the sound off

function buyAll(numberBought = 50) {
   updateScores()


   for (i = 0; i < numberBought; i++) {
      playState.buyMachine(playState.pennyButton);

   }
   playState.hideToast() //"hide toast" just hides the popup that runs after certain upgrades

   for (i = 0; i < numberBought; i++) {
      playState.buyMachine(playState.nickelButton);
   }
   playState.hideToast()


   for (i = 0; i < numberBought; i++) {
      playState.buyMachine(playState.dimeButton);
   }
   playState.hideToast()

   for (i = 0; i < numberBought; i++) {
      playState.buyMachine(playState.quarterButton);
   }
   playState.hideToast()

   for (i = 0; i < numberBought; i++) {
      playState.buyMachine(playState.halfDollarButton);
   }
   playState.hideToast()


   for (i = 0; i < numberBought; i++) {
      playState.buyMachine(playState.dollarButton);
   }
   playState.hideToast()

   for (i = 0; i < numberBought; i++) {
      playState.buyMachine(playState.libertyButton);
   }
   playState.hideToast()

   runUpgrades()
}



function updateScores(multiplier = 100) {
   // there could be a more sophisticated way to do this, but for now, just setting to infinity
   playState.currentScore = Number.POSITIVE_INFINITY;
}
function runUpgrades() {
   updateScores()
   // check for various upgrades, and then run them if they are visible
   if (typeof playState.autoPressButton !== 'undefined' && playState.autoPressButton.visible) {
      playState.buyAutoPress(playState.autoPressButton);
   }
   if (typeof playState.coinPressMultButton !== 'undefined' && playState.coinPressMultButton.visible) {
      playState.increasePressMultiplier(playState.coinPressMultButton);
   }
   if (typeof playState.coinPressSpeedButton !== 'undefined' && playState.coinPressSpeedButton.visible) {
      playState.increasePressSpeed(playState.coinPressSpeedButton);
   }
   if (typeof playState.coinUpgradeButton !== 'undefined' && playState.coinUpgradeButton.visible) {
      playState.setCoinValue(playState.coinUpgradeButton);
   }
   playState.hideToast()

   updateScores()
   for (x in playState.upgradeButtons.children) {
      myobj = playState.upgradeButtons.children[x];
      if (myobj.visible) {
         if (typeof myobj.buyFunc === "function") {
            if (myobj.buyFunc.name === "speedUpMachine") {
               playState.speedUpMachine(myobj);
            }
            else if (myobj.buyFunc.name === "addMachineMultiplier") {
               playState.addMachineMultiplier(myobj);
            }
            else {
               console.log(myobj.buyFunc.name);
            }
         }
      }
   }
   playState.hideToast()
}