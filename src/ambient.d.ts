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
}

declare function print(str: string): void