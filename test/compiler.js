
/*
  Disable webpack-specific features for tests since
  tests do not use webpack in order to handle these
  if SUT is working with these types of files
*/
require.extensions['.css'] = function () {
  return null;
};
require.extensions['.png'] = function () {
  return null;
};
require.extensions['.jpg'] = function () {
  return null;
};


