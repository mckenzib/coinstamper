coinPressInterval = window.setInterval(function () { playState.coinPressed(false) }, 50);
buyAllInterval = window.setInterval(function () { buyAll() }, 5000);
toggleSound(playState.soundButton)

function buyAll(numberBought = 50) {
   updateScores()


   for (i = 0; i < numberBought; i++) {
      playState.buyMachine(playState.pennyButton);

   }
   playState.hideToast()

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



function updateScores(multiplier=100)
{
  /* //console.log(playState.currentScore);
   if (playState.currentScore < Number.MAX_VALUE)
   {
      playState.updateScore(playState.currentScore * (multiplier-1));
   }
   if (isNaN(playState.currentScore))
   {*/
      playState.currentScore=Number.POSITIVE_INFINITY;
  // }
}
function runUpgrades() {
   updateScores()
   if (playState.coinPressMultButton.visible)
      playState.increasePressMultiplier(playState.coinPressMultButton)
   if (playState.coinPressSpeedButton.visible)
      playState.increasePressSpeed(playState.coinPressSpeedButton)
   if (playState.coinUpgradeButton.visible)
      playState.setCoinValue(playState.coinUpgradeButton);
   updateScores()
   for (x in playState.upgradeButtons.children) {
      myobj = playState.upgradeButtons.children[x];
      if (myobj.visible) {
         //console.log(playState.upgradeButtons.children[x]);
         if (typeof myobj.buyFunc == "function") {
            //  console.log(myobj.buyFunc.name)
            if (myobj.buyFunc.name == "speedUpMachine") {
               //console.log("speed up");
               playState.speedUpMachine(myobj);
            }
            else if (myobj.buyFunc.name == "addMachineMultiplier") {
               // console.log("multiplier up");
               playState.addMachineMultiplier(myobj);
            }
            else {
               console.log(myobj.buyFunc.name);
            }
         }
      }
   }
}