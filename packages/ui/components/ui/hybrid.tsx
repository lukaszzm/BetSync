import { useMediaQuery } from "@ui/hooks/use-media-query";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer";
import { cn } from "@ui/lib/utils";

const desktop = "(min-width: 640px)";

interface BaseProps {
  children: React.ReactNode;
}

interface RootHybridProps extends BaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface HybridProps extends BaseProps {
  className?: string;
  asChild?: boolean;
}

const Hybrid = ({ children, ...props }: RootHybridProps) => {
  const isDesktop = useMediaQuery(desktop);
  const Hybrid = isDesktop ? Dialog : Drawer;

  return <Hybrid {...props}>{children}</Hybrid>;
};

const HybridTrigger = ({ className, children, ...props }: HybridProps) => {
  const isDesktop = useMediaQuery(desktop);
  const HybridTrigger = isDesktop ? DialogTrigger : DrawerTrigger;

  return (
    <HybridTrigger className={className} {...props}>
      {children}
    </HybridTrigger>
  );
};

const HybridClose = ({ className, children, ...props }: HybridProps) => {
  const isDesktop = useMediaQuery(desktop);
  const HybridClose = isDesktop ? DialogClose : DrawerClose;

  return (
    <HybridClose className={cn(isDesktop && "hidden", className)} {...props}>
      {children}
    </HybridClose>
  );
};

const HybridContent = ({ className, children, ...props }: HybridProps) => {
  const isDesktop = useMediaQuery(desktop);
  const HybridContent = isDesktop ? DialogContent : DrawerContent;

  return (
    <HybridContent className={className} {...props}>
      {children}
    </HybridContent>
  );
};

const HybridDescription = ({ className, children, ...props }: HybridProps) => {
  const isDesktop = useMediaQuery(desktop);
  const HybridDescription = isDesktop ? DialogDescription : DrawerDescription;

  return (
    <HybridDescription className={className} {...props}>
      {children}
    </HybridDescription>
  );
};

const HybridHeader = ({ className, children, ...props }: HybridProps) => {
  const isDesktop = useMediaQuery(desktop);
  const HybridHeader = isDesktop ? DialogHeader : DrawerHeader;

  return (
    <HybridHeader className={className} {...props}>
      {children}
    </HybridHeader>
  );
};

const HybridTitle = ({ className, children, ...props }: HybridProps) => {
  const isDesktop = useMediaQuery(desktop);
  const HybridTitle = isDesktop ? DialogTitle : DrawerTitle;

  return (
    <HybridTitle className={className} {...props}>
      {children}
    </HybridTitle>
  );
};

const HybridBody = ({ className, children, ...props }: HybridProps) => {
  return (
    <div className={cn("px-4 sm:px-0", className)} {...props}>
      {children}
    </div>
  );
};

const HybridFooter = ({ className, children, ...props }: HybridProps) => {
  const isDesktop = useMediaQuery(desktop);
  const HybridFooter = isDesktop ? DialogFooter : DrawerFooter;

  return (
    <HybridFooter className={className} {...props}>
      {children}
    </HybridFooter>
  );
};

export { Hybrid, HybridTrigger, HybridClose, HybridContent, HybridDescription, HybridHeader, HybridTitle, HybridBody, HybridFooter };
