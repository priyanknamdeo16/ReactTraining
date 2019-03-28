
const formValidations = (type, val) => {
  if(type === 'email' || type === 'domain') {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
 
      if(!pattern.test(val)) {
          return false;
      } else {
          return true;
      }
  }
  if(type === 'name' || type === 'address1' || type === 'country' || type === 'state' || type === 'city') {
    if(val.match(/^[a-zA-Z ]*$/)) {
        return true;
    }
    else {
         return false;
    }
  }
}
export default formValidations;