(function() {
   if (location != 'chrome://browser/content/browser.xhtml') return;

   try {
      var propsBase = {
         label: 'Restart',
         tooltiptext: 'Restart (with right and middle click userChrome.js cache is emptied)',
         style: 'list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8%2F9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89%2BbN%2FrXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz%2FSMBAPh%2BPDwrIsAHvgABeNMLCADATZvAMByH%2Fw%2FqQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf%2BbTAICd%2BJl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA%2Fg88wAAKCRFRHgg%2FP9eM4Ors7ONo62Dl8t6r8G%2FyJiYuP%2B5c%2BrcEAAAOF0ftH%2BLC%2BzGoA7BoBt%2FqIl7gRoXgugdfeLZrIPQLUAoOnaV%2FNw%2BH48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl%2FAV%2F1s%2BX48%2FPf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H%2FLcL%2F%2Fwd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s%2BwM%2B3zUAsGo%2BAXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93%2F%2B8%2F%2FUegJQCAZkmScQAAXkQkLlTKsz%2FHCAAARKCBKrBBG%2FTBGCzABhzBBdzBC%2FxgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD%2FphCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8%2BQ8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8%2BxdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR%2BcQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI%2BksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG%2BQh8lsKnWJAcaT4U%2BIoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr%2Bh0uhHdlR5Ol9BX0svpR%2BiX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK%2BYTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI%2BpXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q%2FpH5Z%2FYkGWcNMw09DpFGgsV%2FjvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY%2FR27iz2qqaE5QzNKM1ezUvOUZj8H45hx%2BJx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4%2FOBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up%2B6Ynr5egJ5Mb6feeb3n%2Bhx9L%2F1U%2FW36p%2FVHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm%2Beb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw%2B6TvZN9un2N%2FT0HDYfZDqsdWh1%2Bc7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc%2BLpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26%2FuNu5p7ofcn8w0nymeWTNz0MPIQ%2BBR5dE%2FC5%2BVMGvfrH5PQ0%2BBZ7XnIy9jL5FXrdewt6V3qvdh7xc%2B9j5yn%2BM%2B4zw33jLeWV%2FMN8C3yLfLT8Nvnl%2BF30N%2FI%2F9k%2F3r%2F0QCngCUBZwOJgUGBWwL7%2BHp8Ib%2BOPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo%2Bqi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt%2F87fOH4p3iC%2BN7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi%2FRNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z%2Bpn5mZ2y6xlhbL%2BxW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a%2FzYnKOZarnivN7cyzytuQN5zvn%2F%2FtEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1%2B1dT1gvWd%2B1YfqGnRs%2BFYmKrhTbF5cVf9go3HjlG4dvyr%2BZ3JS0qavEuWTPZtJm6ebeLZ5bDpaql%2BaXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO%2FPLi8ZafJzs07P1SkVPRU%2BlQ27tLdtWHX%2BG7R7ht7vPY07NXbW7z3%2FT7JvttVAVVN1WbVZftJ%2B7P3P66Jqun4lvttXa1ObXHtxwPSA%2F0HIw6217nU1R3SPVRSj9Yr60cOxx%2B%2B%2Fp3vdy0NNg1VjZzG4iNwRHnk6fcJ3%2FceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w%2B0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb%2B%2B6EHTh0kX%2Fi%2Bc7vDvOXPK4dPKy2%2BUTV7hXmq86X23qdOo8%2FpPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb%2F1tWeOT3dvfN6b%2FfF9%2FXfFt1%2Bcif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v%2B3Njv3H9qwHeg89HcR%2FcGhYPP%2FpH1jw9DBY%2BZj8uGDYbrnjg%2BOTniP3L96fynQ89kzyaeF%2F6i%2FsuuFxYvfvjV69fO0ZjRoZfyl5O%2FbXyl%2FerA6xmv28bCxh6%2ByXgzMV70VvvtwXfcdx3vo98PT%2BR8IH8o%2F2j5sfVT0Kf7kxmTk%2F8EA5jz%2FGMzLdsAAAAEZ0FNQQAAsY58%2B1GTAAAAIGNIUk0AAHolAACAgwAA%2Bf8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAN8SURBVHjaVJFNTBxlAIafb2Z29gd2l4VdYCkokAUt1AJplQRTrVqjUWMPPWHSCzb21IOn9qIHY2xMahoTTb00NmkUm5qAjdpUI61VaCxCpCVYixt%2ByvKzCwu7LDs7zMw3HmhM%2Bt6fJ0%2FyCp69wiOzZBCPcqSmIXg0HPHuC4R8nkLWyOXyYiIzfuVHzMIA%2BZsLtH18EApntUdhpzUSD5577nDLi%2FGWKjx%2BHVfR8HpFwNwsxTMzza%2BOXJ1%2B58Ev2sVEV%2ByEawXqxf8FllNWEQ9ePXzsqQOecIDU8jampSAVD76Al2BIIx4Dv2Nz7%2FYq%2B5%2BP8sNXE6WdAhdQlOM9rzUdaGiN8M9UjnKvQjzuA0UjV3AxDIcHywqRoEbXoVrKgyBtKXYEUvprmiN9oaoyvr9wl62NHJbtJeDzOo17YmprVzWOppLO2RRNwf1FSOzSUAXsCIR4QdP13UPfjhUde2mjuBXUjcXNEabOnJmq7Y4Nd7z1fu%2BJ%2FR2Jpgrm0jauAI8GlnSlBi4I0bO6sLBWHc9esxRdmjOZf5n%2B5CLWzCzOvsbKupBZ1xgmElUoC%2BgoKtRGQfNomoaND8P8XS%2Bby1olO7O6GHTl1DejGDOrNB%2BvpO7I%2Ba31%2FDP9Z28YUmqoqhCKcG2EYD6ZMUTojZ8WHmsqD%2BI6wnWFajugCkuuZaV%2FZS47wp99R7E3LbxPV6rtr7dV1pmyuBWs3hr7dZ380LC2tzseffvUHm86C1JC2A%2FrGcn509cn%2BPvTk9ibc1R06qL91Ms1CadF000ll9rVS2VykLzVr0lHOgtpuJ9yUFyXxqhKZjbH2nJRI9IZwyw2kXjvXV%2FIOWgaBcc2a%2BtjdVXR1J3iBDx8QUpQUJAuJJclseogxz441H5vrPO72cm0VSyVPJq27ZaHm8ST3Y0M9d9Kkr19A1A1x4VIObTGBfNrsJ5XmE9b6KqgvrOGhr1Vns2sgeNIkXiigvHf1liZuHWZYjINSEXRVLewZjN6bYmYbvN4rcDvVzFKLnOpErMLBpvbklClznyyyPDA6DjTX3wJWICr%2Bnb3ffjXSGpl5Nxnn88uh2ORUCBaHfVQU%2BsjVuGhKqJT5lFYShr8fGH4j42bH53EnJ4EtgEEPQOTzHx9mqXLl9AT9TS82RvreOmVcMTXVh4JhIr5kp3LFu6u3Lk%2ByMylQazU3ENYAvw3AFUTimFqj5i7AAAAAElFTkSuQmCC)',
         onclick: 'if (event.button == 1 || event.button == 2) { \
                  event.preventDefault(); \
                  Cc["@mozilla.org/xre/app-info;1"].getService(Ci.nsIXULRuntime). \
                     invalidateCachesOnRestart(); \
                }; \
                let cancelQuit = Cc["@mozilla.org/supports-PRBool;1"].createInstance(Ci.nsISupportsPRBool);\
                Services.obs.notifyObservers(cancelQuit, "quit-application-requested", "restart");\
                if (cancelQuit.data)\
                   return;\
                let XRE = Cc["@mozilla.org/xre/app-info;1"].getService(Ci.nsIXULRuntime);\
                if (typeof XRE.invalidateCachesOnRestart == "function")\
                   XRE.invalidateCachesOnRestart();\
                let appStartup = Cc["@mozilla.org/toolkit/app-startup;1"].\
                getService(Ci.nsIAppStartup);\
                appStartup.quit(Ci.nsIAppStartup.eAttemptQuit |  Ci.nsIAppStartup.eRestart);'
      };

      CustomizableUI.createWidget({
         id: 'restart-button',
         type: 'custom',
         defaultArea: CustomizableUI.AREA_NAVBAR,
         onBuild: function(aDocument) {
            var toolbaritem = aDocument.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'toolbarbutton');
            var props = propsBase;
            props["id"] = 'restart-button';
            props["class"] = 'toolbarbutton-1 chromeclass-toolbar-additional';
            props["label"] = false;

            for (var p in props)
               toolbaritem.setAttribute(p, props[p]);
            return toolbaritem;
         }
      });
   } catch(e) { };

   // <editor-fold desc="メニュー「ファイル」に追加する">
   var props = propsBase;
   props["id"] = 'restartfirefox-fileMenu2';
   var optionsitem = document.getElementById("menu_FileQuitItem");

   menuitem =  document.getElementById("menu_newNavigatorTab").cloneNode(true);
   for (var p in props){
      menuitem.setAttribute(p, props[p]);
   }
   menuitem.setAttribute("data-l10n-id", "");
   menuitem.setAttribute("label", "Restart");
   menuitem.setAttribute("accesskey", "");
   menuitem.setAttribute("acceltext", "");
   menuitem.setAttribute("command", "");
   menuitem.setAttribute("key", "");
   menuitem = optionsitem.parentNode.insertBefore(menuitem, optionsitem);
   // </editor-fold>



   var pane1 = document.getElementById('appmenuPrimaryPane');
   if (pane1) {
      menuitem = document.createElement('menuitem');
      var props = propsBase;
      props["id"] = 'restartfirefox-fileMenu';

      for (var p in props)
         menuitem.setAttribute(p, props[p]);
      pane1.insertBefore(menuitem, document.getElementById('appmenu-quit'));
   }
})();