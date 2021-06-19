pkg.initGettext();
pkg.initFormat();
pkg.require({
  "Gdk": "3.0",
  "Gio": "2.0",
  "GLib": "2.0",
  "GObject": "2.0",
  "Gtk": "3.0"
});
imports.gi.versions.Gtk = "3.0";
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;
function initEnvironment() {
  window.getApp = function() {
    return Gio.Application.get_default();
  };
}
const MyWindow = GObject.registerClass(class MyWindow2 extends Gtk.ApplicationWindow {
  _init(app) {
    super._init({ title: "Hello World", application: app });
    this.button = new Gtk.Button({ label: "Click here" });
    this.button.connect("clicked", MyWindow2.onButtonClicked);
    this.add(this.button);
  }
  static onButtonClicked() {
    print("Hello World");
  }
});
function main(argv) {
  initEnvironment();
  const application = new Gtk.Application({
    application_id: "io.orta.clipboard",
    flags: Gio.ApplicationFlags.FLAGS_NONE
  });
  application.connect("activate", (app) => {
    let activeWindow = app.activeWindow;
    if (!activeWindow) {
      activeWindow = new MyWindow(application);
      activeWindow.connect("delete-event", () => Gtk.main_quit());
    }
    activeWindow.present();
  });
  return application.run(argv);
}
