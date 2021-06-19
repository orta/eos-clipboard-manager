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
const Gtk = imports.gi.Gtk;

const mainWindow = imports.dist.mainWindow as { MainWindow: import("./mainWindow").MainWindow };

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
        let activeWindow: GTK.Window | undefined = app.activeWindow;
    
        if (!activeWindow) {
           activeWindow = new mainWindow.MainWindow(application)
           activeWindow.connect("delete-event", () => Gtk.main_quit());
        }
    
        activeWindow.show_all();
    });

    return application.run(argv)
  }

