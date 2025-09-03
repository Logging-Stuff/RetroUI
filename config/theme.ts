export enum Theme {
    Default = "default",
    Purple = "purple",
    Red = "red",
    Lavender = "lavender",
    Orange = "orange",
    Green = "green",
}


export const themeConfig = ({hasRadius = false}: {hasRadius?: boolean}) => ({
    [Theme.Default]: {
        name: "default",
        color:
`:root {
    --radius: ${hasRadius ? "0.5rem" : "0"};
    --background: #fff;
    --foreground: #000;
    --card: #fff;
    --card-foreground: #000;
    --primary: #ffdb33;
    --primary-hover: #ffcc00;
    --primary-foreground: #000;
    --secondary: #000;
    --secondary-foreground: #fff;
    --muted: #cccccc;
    --muted-foreground: #5a5a5a;
    --accent: #fae583;
    --accent-foreground: #000;
    --destructive: #e63946;
    --destructive-foreground: #fff;
    --border: #000;
    --background-image: url("/images/banner_void_2.svg");
    --chart-1: #c4a1ff;
    --chart-2: #01ffcc;
    --chart-3: #e7f192;
    --chart-4: #000;
    --chart-5: #ff30cd;
}`,
    },
    [Theme.Purple]: {
        name: "purple",
        color: 
`:root {
    --radius: ${hasRadius ? "0.5rem" : "0"};
    --background: #f5f5f5;
    --foreground: #1a1a1a;
    --card: #FFFFFF;
    --card-foreground: #f5f5f5;
    --primary: #5F4FE6;
    --primary-hover: #4938C2;
    --primary-foreground: #fff;
    --secondary: #3a3a3a;
    --secondary-foreground: #f5f5f5;
    --muted: #CFCCEA;
    --muted-foreground: #5B5686;
    --accent: #FED13B;
    --accent-foreground: #000000;
    --destructive: #EF4444;
    --destructive-foreground: #fff;
    --border: #3a3a3a;
    --background-image: url("/images/bg_void_3.svg");
    --chart-1: #ffdb33;
    --chart-2: #000;
    --chart-3: #aeaeae;
    --chart-4: #fae583;
    --chart-5: #e63946;
}`,
    },
    [Theme.Red]: {
        name: "Red",
        color: 
`:root {
    --radius: ${hasRadius ? "0.5rem" : "0"};
    --background: #FCFFE7;
    --foreground: #000000;
    --muted: #EFD0D5;
    --muted-foreground: #A42439;
    --card: #FFFFFF;
    --card-foreground: #000000;
    --popover: #FFFFFF;
    --popover-foreground: #000000;
    --border: #000000;
    --input: #FFFFFF;
    --primary: #EA435F;
    --primary-hover: #D00000;
    --primary-foreground: #FFFFFF;
    --secondary: #FFDA5C;
    --secondary-foreground: #000000;
    --accent: #CEEBFC;
    --accent-foreground: #000000;
    --destructive: #D00000;
    --destructive-foreground: #FFFFFF;
    --ring: #000000;
}`,
    },
    [Theme.Lavender]: {
        name: "Lavender",
        color: 
`:root {
    --radius: ${hasRadius ? "0.5rem" : "0"};
    --background: #F9F5F2;
    --foreground: #000000;
    --muted: #EFD0D5;
    --muted-foreground: #A42439;
    --card: #FFFFFF;
    --card-foreground: #000000;
    --popover: #FFFFFF;
    --popover-foreground: #000000;
    --border: #000000;
    --input: #FFFFFF;
    --primary: #EA435F;
    --primary-hover: #D00000;
    --primary-foreground: #FFFFFF;
    --secondary: #FFDA5C;
    --secondary-foreground: #000000;
    --accent: #CEEBFC;
    --accent-foreground: #000000;
    --destructive: #D00000;
    --destructive-foreground: #FFFFFF;
    --ring: #000000;
}`,
    },
    [Theme.Orange]: {
        name: "Orange",
        color: 
`:root {
    --radius: ${hasRadius ? "0.5rem" : "0"};
    --background: #F9F5F2;
    --foreground: #000000;
    --muted: #EFD0D5;
    --muted-foreground: #A42439;
    --card: #FFFFFF;
    --card-foreground: #000000;
    --popover: #FFFFFF;
    --popover-foreground: #000000;
    --border: #000000;
    --input: #FFFFFF;
    --primary: #EA435F;
    --primary-hover: #D00000;
    --primary-foreground: #FFFFFF;
    --secondary: #FFDA5C;
    --secondary-foreground: #000000;
    --accent: #CEEBFC;
    --accent-foreground: #000000;
    --destructive: #D00000;
    --destructive-foreground: #FFFFFF;
    --ring: #000000;
}`,
    },
    [Theme.Green]: {
        name: "Green",
        color: 
`:root {
    --radius: ${hasRadius ? "0.5rem" : "0"};
    --background: #F9F5F2;
    --foreground: #000000;
    --muted: #EFD0D5;
    --muted-foreground: #A42439;
    --card: #FFFFFF;
    --card-foreground: #000000;
    --popover: #FFFFFF;
    --popover-foreground: #000000;
    --border: #000000;
    --input: #FFFFFF;
    --primary: #EA435F;
    --primary-hover: #D00000;
    --primary-foreground: #FFFFFF;
    --secondary: #FFDA5C;
    --secondary-foreground: #000000;
    --accent: #CEEBFC;
    --accent-foreground: #000000;
    --destructive: #D00000;
    --destructive-foreground: #FFFFFF;
    --ring: #000000;
}`,
    },
});

export const themes = Object.keys(themeConfig({hasRadius: false}));

