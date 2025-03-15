export const goBack = navigation => {
  if (navigation.canGoBack()) {
    navigation.goBack();
  } else {
    console.warn('No screen to go back to');
  }
};
