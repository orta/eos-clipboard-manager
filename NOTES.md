- needed to do `sudo apt-get install libgjs-dev`

- meson creates build files in `builddir` via `meson setup builddir --wipe`
- ninja installs: `ninja -C builddir install; io.orta.template`


You can investigate locally a bit better via `meson setup builddir --wipe --prefix $PWD/run`.

Thus, you basically need to run `meson setup builddir --wipe --prefix $PWD/run` once, then `ninja -C builddir install; ./run/bin/io.orta.template` per iteration.