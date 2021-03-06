/**
 * The following defines the interface for the Launchem config used to configure
 * browsers and launchers.
 */
interface LaunchemConfig {
  platform: string;

  cwd: string;
  url: string;
  port: string;
  user_data_dir: string

  homeDir: string;
  mode: string;
  browser_args: object;

  firefox_user_js: string;

  phantomjs_launch_script: string;
  phantomjs_debug_port: string;
  phantomjs_args: string;
}
