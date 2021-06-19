# Sets up a mason project, and creates an 
# ID which the app uses 
project('io.orta.clipboard', 'c',
  version: '0.0.1',
  meson_version: '>= 0.49.0',
)

app_id = meson.project_name() +'.JSApp'

gnome = import('gnome')

source_conf = configuration_data()
source_conf.set('GJS', find_program('gjs').path())
source_conf.set('PACKAGE_NAME', app_id)
source_conf.set('PACKAGE_VERSION', meson.project_version())
source_conf.set('prefix', get_option('prefix'))
pkgdatadir = join_paths(get_option('datadir'), meson.project_name() )
source_conf.set('libdir', join_paths(get_option('prefix'), get_option('libdir')))
source_conf.set('pkgdatadir', pkgdatadir)

dependency('gtk+-3.0')
dependency('glib-2.0')
dependency('gobject-introspection-1.0', version: '>=1.35.9')
dependency('gjs-1.0', version: '>= 1.50.0')

app_launcher = configure_file(
  input: 'data/io.orta.clipboard.in',
  output:meson.project_name(),
  configuration: source_conf,
)

install_data(app_launcher,
  install_dir: get_option('bindir'),
  install_mode: 'rwxr-xr-x'
)

application_sources = gnome.compile_resources(
  'io.orta.clipboard.src',
  configure_file(
    input: 'data/io.orta.clipboard.src.gresource.xml.in',
    output: meson.project_name() + '.src.gresource.xml',
    configuration: source_conf,
  ),
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir
)


run_target('run',
  command: app_launcher,
  depends: application_sources
)

# Install our .desktop file so the Applications Menu will see it
install_data(
    join_paths('data', 'clipboard.desktop'),
    install_dir: join_paths(get_option('datadir'), 'applications'),
    rename: meson.project_name() + '.desktop'
)

# Install our .appdata.xml file so AppCenter will see it
install_data(
    join_paths('data', 'clipboard.appdata.xml'),
    install_dir: join_paths(get_option('datadir'), 'metainfo'),
    rename: meson.project_name() + '.appdata.xml'
)

