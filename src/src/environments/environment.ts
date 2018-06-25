// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  MAPBOX_API_KEY: 'pk.eyJ1IjoicGVydmVydGVkZXYiLCJhIjoiY2o2NTRsZWU2MXp3bzMzbW9tcXVwczNndiJ9.8TxcIrKkrxTmQPpPIhM1sw',
  STORE_API_URL: 'http://chocolatier-middleware.dev/',
  API_URL: 'http://benoit-nihant-cms.phprvrt.com/api/',
  CMS_IMG_URL: 'http://benoit-nihant-cms.phprvrt.com/uploads/galleries/',
  STORE_IMAGE_URL: 'http://chocolatier-store.dev/pub/media/catalog/',
  LANG_CODE: {
    "en": "default",
    "fr": "french",
    "nl": "nether"
  },
  
};
