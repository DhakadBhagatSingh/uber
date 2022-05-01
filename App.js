import React from 'react';
import {View} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  
  const paymentHandler = () => {
    var options = {
      description: 'Checking the Payment Done',
      image: 'https://i.imgur.com/3g7nmJC.png', //Logo of the company 
      currency: 'INR',
      key: 'rzp_test_ZlgQyfDoLMeaE0', // Honor's API key
      amount: '5000',  //These are in paise, so we have to convert it into Rupees
      name: 'Dhakad Bhagat Singh',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      // Add whatever you want to add
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }

  return (
    <View> <Button onpress = {paymentHandler} title = "Pay Now"/>
    </View>
  );
}; 

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
