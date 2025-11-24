import { Palette } from "lucide-react";

export default function Footer() {

  return (
    <>
      {/* Footer */}
      <div className="rounded-lg border-t pb-4 pt-8 text-center md:pb-0">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">More Tools Coming Soon</h3>
          <p className="text-muted-foreground">
            We&apos;re constantly adding new developer utilities. Stay tuned for
            more powerful tools!
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <Palette className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-muted-foreground">
              Built with modern design principles
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
