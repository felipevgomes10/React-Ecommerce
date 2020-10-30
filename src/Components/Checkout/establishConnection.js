export const establishConnection = (email, price) => {
  window.PayWithMyBank.establish({
    accessId: 'D61EC9BAF0BB369B9438',
    merchantId: '1004314986',
    metadata: { demo: 'enabled' },
    currency: 'USD',
    paymentType: 'Deferred',
    amount: `${price}`,
    description: `${email}`,
    merchantReference: `${Date.now() * Math.random()}`,
    returnUrl: '#success',
    cancelUrl: '#cancel'
  });
}