// Sets up the known globals 

declare const pkg: any

declare const imports: {
    gi: {
        versions: {
            Gtk: string
        }
        Gio: typeof import("@gi-types/gio"),
        GLib: typeof import("@gi-types/glib"),
        Gtk: typeof import("@gi-types/gtk"),
        GObject: typeof import("@gi-types/gobject")
    }
    // There correspond to files which have gone from src -> dist
    // via esbuild, the general rule of thumb to remember is that
    // anything classed as a `var` is exported.
    //
    // Changes to the list of srcfiles will need corresponding
    // changes to the gresource xml doc too
    dist: {
        mainWindow: any
    }
}

declare function print(str: string): void