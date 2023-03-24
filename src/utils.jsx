export function _getBase64(file, onLoadCallback) {

      return new Promise(function (resolve, reject) {
    
        var reader = new FileReader();
    
        reader.onload = function () {
    
          return resolve(reader.result);
    
        };
    
        reader.onerror = reject;
    
        reader.readAsDataURL(file);
    
      });
    
    }