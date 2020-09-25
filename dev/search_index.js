var documenterSearchIndex = {"docs":
[{"location":"#CellLists.jl","page":"CellLists.jl","title":"CellLists.jl","text":"","category":"section"},{"location":"","page":"CellLists.jl","title":"CellLists.jl","text":"Documentation for CellLists.jl","category":"page"},{"location":"","page":"CellLists.jl","title":"CellLists.jl","text":"CellList\nCellList(::Array{T, 2}, ::T) where T <: AbstractFloat\nnear_neighbors(::CellList)","category":"page"},{"location":"#CellLists.CellList","page":"CellLists.jl","title":"CellLists.CellList","text":"CellList type.\n\n\n\n\n\n","category":"type"},{"location":"#CellLists.CellList-Union{Tuple{T}, Tuple{Array{T,2},T}} where T<:AbstractFloat","page":"CellLists.jl","title":"CellLists.CellList","text":"Construct CellList for d-dimensional points p and radius r>0.\n\nExamples\n\np = rand(10, 2)\nc = CellList(p, 0.1)\n\n\n\n\n\n","category":"method"},{"location":"#CellLists.near_neighbors-Tuple{CellList}","page":"CellLists.jl","title":"CellLists.near_neighbors","text":"Returns vector of index pairs of points that are possible near neighbors.\n\nExamples\n\njulia> near_neighbors(c)\n[(3, 6), (4, 5)]\n\n\n\n\n\n","category":"method"}]
}
