
To get gjs running, you need to do `sudo apt-get install gjs libgjs-dev`
To get meson: `sudo apt-get install meson`
To get gtk+: `sudo apt-get install libgtk-3-dev`

Running:
- meson creates build files in `builddir` via `meson setup builddir --wipe`
- ninja installs: `ninja -C builddir install; io.orta.template`


You can investigate locally a bit better via `meson setup builddir --wipe --prefix $PWD/run`.

Thus, you basically need to run `meson setup builddir --wipe --prefix $PWD/run` once, then `ninja -C builddir install; ./run/bin/io.orta.template` per iteration.