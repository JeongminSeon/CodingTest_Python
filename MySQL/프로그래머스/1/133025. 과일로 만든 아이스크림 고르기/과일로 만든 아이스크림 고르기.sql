SELECT a.flavor
FROM FIRST_HALF as a, ICECREAM_INFO as b
where a.flavor = b.flavor
and a.total_order > 3000
and b.ingredient_type = 'fruit_based'
order by a.total_order desc;