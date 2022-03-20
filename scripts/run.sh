yarn esbuild src/*.ts --outdir=dist
ninja -C builddir
chmod +x builddir/io.orta.clipboard
./builddir/io.orta.clipboard