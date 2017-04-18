var GenreUserDefine;
(function (GenreUserDefine) {
    GenreUserDefine[GenreUserDefine["Jazz"] = 1000] = "Jazz";
    GenreUserDefine[GenreUserDefine["Pop"] = 2000] = "Pop";
    GenreUserDefine[GenreUserDefine["Techno"] = 3000] = "Techno";
    GenreUserDefine[GenreUserDefine["Funk"] = 3001] = "Funk";
})(GenreUserDefine || (GenreUserDefine = {}));
var genre = GenreUserDefine;
console.log(genre.Funk);
