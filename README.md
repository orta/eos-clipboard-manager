### elementaryOS Clipboard Manager

Taking design inspiration from [Alfred on macOS](https://www.alfredapp.com/help/features/clipboard/).

### Getting Set Up

You'll need a few development dependencies. First up are _system_ dependencies: gtk dev, meson, ninja and gjs.

```sh
sudo apt-get install libgtk-3-dev
sudo apt-get install meson
sudo apt-get install python3 python3-pip python3-setuptools python3-wheel ninja-build
sudo apt-get install gjs libgjs-dev
```

Now you can think about the JS level deps:

```sh
yarn install
```

### Compiling

eOS apps are created by meson, I have a quick script to make a build into a tmp dir and then  open it:

```sh
# Run this once:
meson setup builddir --wipe --prefix /tmp/eos-clipboard/run

# Now run this:
sh ./run.sh
```