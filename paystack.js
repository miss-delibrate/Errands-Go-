
function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: 'sk_test_7d52ce95eabd09e4d32a6d350fba710017e127a5',
    email: 'customer@email.com',
    amount: 5000,
    currency: 'GHS',
    callback: function(response){
        alert('Payment successful. Ref: ' + response.reference);
    },
    onClose: function(){
        alert('Transaction cancelled');
    }
  });
  handler.openIframe();
}
