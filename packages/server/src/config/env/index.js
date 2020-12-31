import path from 'path';
import dotenv from 'dotenv';
import yargs from 'yargs';

const resolve = (filename) => path.resolve(__dirname, filename);
const envName =
  (yargs && yargs.argv && yargs.argv.env) || process.env.NODE_ENV || 'dev';

/**
 * Loads environment variables from .env files.
 *
 * @param {"prod" | "test" | "dev"} envName
 * @returns {{[key: string]: string}}
 */
function load(envArg = 'dev') {
  const env = [
    dotenv.config({ path: resolve(`.env.${envArg}`) }).parsed,
    dotenv.config({ path: resolve(`.env`) }).parsed
  ]
    .reverse()
    .reduce((acc, parsed) => ({ ...acc, ...parsed }), {});

  Object.assign(process.env, env);

  const PORT = process.env.PORT || 3000;

  return { ...env, PORT };
}

export default load(envName);
