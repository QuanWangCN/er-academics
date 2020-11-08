from siuba import *
from siuba.data import mtcars
from plotnine import *

print(mtcars
    >> group_by(_.cyl)
    >> summarize(avg_hp=_.hp.mean()))


(tidy_bob
    >> count(_.tag,sort=True)
    >> mutate(tag=fct_reorder(_.tag,_.n))
    >> filter(_.n>39)
    >> ggplot(aes("tag","n"))
    + geom_col()
    + coord_flip()
    + labs(title="MMMM",x="xxxx",y="yyyy"))
