export interface Paises {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    VUV?: Aed;
    GBP?: Aed;
    GGP?: Aed;
    SYP?: Aed;
    EUR?: Aed;
    MWK?: Aed;
    KHR?: Aed;
    USD?: Aed;
    SBD?: Aed;
    DOP?: Aed;
    CAD?: Aed;
    UYU?: Aed;
    XCD?: Aed;
    BYN?: Aed;
    PKR?: Aed;
    SAR?: Aed;
    HUF?: Aed;
    LKR?: Aed;
    BAM?: BAM;
    KPW?: Aed;
    TZS?: Aed;
    GYD?: Aed;
    NPR?: Aed;
    JOD?: Aed;
    IQD?: Aed;
    SLL?: Aed;
    SHP?: Aed;
    CHF?: Aed;
    PGK?: Aed;
    MOP?: Aed;
    LAK?: Aed;
    BND?: Aed;
    SGD?: Aed;
    TJS?: Aed;
    IRR?: Aed;
    MGA?: Aed;
    ANG?: Aed;
    AZN?: Aed;
    AMD?: Aed;
    UGX?: Aed;
    INR?: Aed;
    XPF?: Aed;
    SEK?: Aed;
    DZD?: Aed;
    NZD?: Aed;
    BHD?: Aed;
    THB?: Aed;
    HKD?: Aed;
    CVE?: Aed;
    UZS?: Aed;
    QAR?: Aed;
    SSP?: Aed;
    GHS?: Aed;
    BZD?: Aed;
    TWD?: Aed;
    AUD?: Aed;
    ZWL?: Aed;
    VND?: Aed;
    KES?: Aed;
    XAF?: Aed;
    XOF?: Aed;
    AOA?: Aed;
    TVD?: Aed;
    MUR?: Aed;
    IDR?: Aed;
    SCR?: Aed;
    AWG?: Aed;
    NGN?: Aed;
    FJD?: Aed;
    ZMW?: Aed;
    BSD?: Aed;
    KMF?: Aed;
    AED?: Aed;
    PYG?: Aed;
    CZK?: Aed;
    MXN?: Aed;
    MDL?: Aed;
    BOB?: Aed;
    CNY?: Aed;
    BMD?: Aed;
    BIF?: Aed;
    STN?: Aed;
    FKP?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    GTQ?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    CRC?: Aed;
    GEL?: Aed;
    ZAR?: Aed;
    PHP?: Aed;
    DKK?: Aed;
    TTD?: Aed;
    PLN?: Aed;
    KWD?: Aed;
    LSL?: Aed;
    ISK?: Aed;
    SZL?: Aed;
    MMK?: Aed;
    JMD?: Aed;
    MAD?: Aed;
    MRU?: Aed;
    ETB?: Aed;
    GMD?: Aed;
    PAB?: Aed;
    BGN?: Aed;
    MNT?: Aed;
    BTN?: Aed;
    WST?: Aed;
    TMT?: Aed;
    KYD?: Aed;
    ERN?: Aed;
    OMR?: Aed;
    RON?: Aed;
    JEP?: Aed;
    CDF?: Aed;
    SOS?: Aed;
    CLP?: Aed;
    NOK?: Aed;
    SDG?: BAM;
    PEN?: Aed;
    NIO?: Aed;
    RUB?: Aed;
    MKD?: Aed;
    KRW?: Aed;
    AFN?: Aed;
    VES?: Aed;
    GNF?: Aed;
    HTG?: Aed;
    ARS?: Aed;
    LBP?: Aed;
    TRY?: Aed;
    KGS?: Aed;
    BBD?: Aed;
    NAD?: Aed;
    SRD?: Aed;
    LYD?: Aed;
    TND?: Aed;
    YER?: Aed;
    GIP?: Aed;
    JPY?: Aed;
    LRD?: Aed;
    BWP?: Aed;
    KID?: Aed;
    BDT?: Aed;
    TOP?: Aed;
    MZN?: Aed;
    HNL?: Aed;
    DJF?: Aed;
    BRL?: Aed;
    FOK?: Aed;
    IMP?: Aed;
    KZT?: Aed;
    RSD?: Aed;
    RWF?: Aed;
    COP?: Aed;
    MYR?: Aed;
    ALL?: Aed;
    UAH?: Aed;
    CKD?: Aed;
    MVR?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
