// @ts-check

import type GTK from "@gi-types/gtk"

pkg.initGettext();
pkg.initFormat();
pkg.require({ 'Gdk': '3.0',
              'Gio': '2.0',
              'GLib': '2.0',
              'GObject': '2.0',
              'Gtk': '3.0' });

imports.gi.versions.Gtk = '3.0';

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject

const MyWindow = GObject.registerClass(class MyWindow extends Gtk.ApplicationWindow {
    box: GTK.Box
    button1: GTK.Button
    button2: GTK.Button

    _init(app: GTK.Application) {
        super._init({ 
            title: "Hello rld", 
            application: app,
            resizable: false,
         });

        this.box = new Gtk.Box({spacing: 6});
        this.add(this.box);

        this.button1 = new Gtk.Button({label: "Hello"});
        this.button1.connect("clicked", this.onButton1Clicked);
        this.box.pack_start(this.button1, true, true, 0);

        this.button2 = new Gtk.Button({label: "Goodbye"});
        this.button2.connect("clicked", this.onButton2Clicked);
        this.box.pack_start(this.button2, true, true, 0);
    }
    
    onButton1Clicked() {
        print("Hello World");
    }

    onButton2Clicked() {
        print("Goodbye World");
    }
});



function main(argv) {

    // @ts-ignore
    window.getApp = function() {
        return Gio.Application.get_default();
    };

    const application = new Gtk.Application({
        application_id: 'io.orta.clipboard',
        flags: Gio.ApplicationFlags.FLAGS_NONE
    });
 
    application.connect('activate', app => {
        let activeWindow = app.activeWindow;
    
        if (!activeWindow) {
           activeWindow = new MyWindow(application)
           activeWindow.connect("delete-event", () => Gtk.main_quit());
        }
    
        activeWindow.show_all();
    });

    return application.run(argv)
  }