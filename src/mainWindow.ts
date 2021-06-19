import type GTK from "@gi-types/gtk"

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject

var MainWindow = GObject.registerClass(
    {
        GTypeName: 'MainWindow',
    },
    class MainWindow extends Gtk.ApplicationWindow {
    box: GTK.Box
    button1: GTK.Button
    button2: GTK.Button

    _init(app: GTK.Application) {
        super._init({ 
            title: `Hello World`, 
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

export type MainWindow = typeof MainWindow