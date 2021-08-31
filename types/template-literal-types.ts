type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

// type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id" 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;


type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>

type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
// type MainID = "ID-MY_APP"
type MainID = ASCIICacheKey<"my_app">


type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>

type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
// type MainID = "id-my_app"
type MainID = ASCIICacheKey<"MY_APP">


type LowercaseGreeting = "hello, world";
// type Greeting = "Hello, world"
type Greeting = Capitalize<LowercaseGreeting>;

