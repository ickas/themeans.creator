import React, { LegacyRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

const ListItem = React.forwardRef(
  (
    {
      className,
      children,
      title,
      ...props
    }: {
      className: string;
      children: React.ReactNode;
      title: string;
      [key: string]: any;
    },
    forwardedRef
  ) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef as LegacyRef<HTMLAnchorElement>}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="/">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Collections <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <ListItem
                href="/openeditionmeans"
                title="The Means Open Editions"
              >
                Giving back and celebrating special moments with our community
              </ListItem>
              <ListItem href="/whatdoyoumeanmeans" title="What Do You Mean?">
                Where The Means go to have fun and try new concepts
              </ListItem>
              <ListItem href="/season1means" title="The Means SZN1">
                Debut Collection
              </ListItem>
              <ListItem href="/season2-5means" title="The Means SZNs 2-5">
                Where the buidling and creating continues
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuDemo;
