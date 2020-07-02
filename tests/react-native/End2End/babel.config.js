module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "transform-inline-environment-variables",
      {
        include: [
          "AWS_SMOKE_TEST_REGION",
          "AWS_SMOKE_TEST_BUCKET",
          "AWS_SMOKE_TEST_IDENTITY_POOL_ID"
        ]
      }
    ]
  ]
};
