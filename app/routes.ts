import { type RouteConfig, index ,route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("alegra-intro","routes/alegra/intro.tsx"),
    route("mission-and-vision","routes/alegra/mission-and-vision.tsx"),
    route("research-team","routes/alegra/research-team.tsx"),
    route("visual-technology","routes/alegra-sub-menu.tsx",[
        index("routes/visualTechnology.tsx"),
        route("what","routes/visual-communication/what.tsx"),
        route("why","routes/visual-communication/why.tsx"),
        route("how","routes/visual-communication/how.tsx")
    ]),
    route("our-offerings","routes/alegra-sub-menu-offering.tsx",[
        index("routes/ourOfferings.tsx"),
        route("affiliation-for-graduation","routes/our-offerings/affiliation-for-graduation.tsx"),
        route("affiliation-for-diploma","routes/our-offerings/affiliation-for-diploma.tsx"),
        route("certification","routes/our-offerings/certification.tsx"),
        route("internship","routes/our-offerings/internship.tsx"),
        route("cross-curricular","routes/our-offerings/cross-curricular.tsx"),
        route("employment","routes/our-offerings/employment.tsx"),
        route("entrepreneurship","routes/our-offerings/entrepreneurship.tsx"),
    ]),
    route("our-unique-features","routes/ourUniqueFeatures.tsx"),
    route("contact","routes/Contact.tsx")

] satisfies RouteConfig;
