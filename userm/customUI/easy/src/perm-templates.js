export default [
   {
      name: "Perms base acesso ao RM",
      vars: [
         { name: "MSG" , type: "simple"   , value: ""}
      ],
      productPerms: [
         {
            product: "recordm",
            perms: [
               { name: "module:view:custom-resource"             , description: "PERM BASE $$MSG$$" },
               { name: "module:view:gestaoocurrencias-importacao", description: "PERM BASE $$MSG$$" },
               { name: "module:view:instance.create"             , description: "PERM BASE $$MSG$$" },
               { name: "module:view:instance.detail"             , description: "PERM BASE $$MSG$$" },
               { name: "module:view:instance.duplicate"          , description: "PERM BASE $$MSG$$" },
               { name: "module:view:instance.groupedit"          , description: "PERM BASE $$MSG$$" },
               { name: "module:view:search-definition"           , description: "PERM BASE $$MSG$$" },
               { name: "module:view:search-domain"               , description: "PERM BASE $$MSG$$" },
               { name: "instances:export"                        , description: "PERM BASE $$MSG$$" },
               { name: "process:instantiate"                     , description: "PERM BASE $$MSG$$" },
               { name: "rm-importer-stats:read"                  , description: "PERM BASE $$MSG$$" },
               { name: "view:share"                              , description: "PERM BASE $$MSG$$" },
            ],
            roles: [
               {
                  name: "RM BASE Access",
                  description: "Perfil base para aceder ao RM $$MSG$$",
                  perms: [
                     "module:view:custom-resource "            ,
                     "module:view:gestaoocurrencias-importacao",
                     "module:view:instance.create "            ,
                     "module:view:instance.detail "            ,
                     "module:view:instance.duplicate "         ,
                     "module:view:instance.groupedit "         ,
                     "module:view:search-definition "          ,
                     "module:view:search-domain "              ,
                     "instances:export "                       ,
                     "process:instantiate "                    ,
                     "rm-importer-stats:read "                 ,
                     "view:share "                             ,
                  ]
               }
            ]
         }
      ]
   },
   {
      name: "Perms base Defini????o RM",
      vars: [
         { name: "DEF"  , type: "RM-DEF", value: {}},
         { name: "MSG" , type: "simple"   , value: ""}
      ],
      productPerms: [
         {
            product: "recordm",
            perms: [
               { name: "definitions:read:$$DEF.ID$$"        ,  description: "$$DEF.NAME$$ - ler defini????o $$MSG$$" },
               { name: "definitions:instantiate:$$DEF.ID$$" ,  description: "$$DEF.NAME$$ - criar novas inst??ncias $$MSG$$" },
               { name: "instances:read:$$DEF.ID$$"          ,  description: "$$DEF.NAME$$ - ler inst??ncias $$MSG$$" },
               { name: "instances:update:$$DEF.ID$$"        ,  description: "$$DEF.NAME$$ - update de inst??ncias $$MSG$$" },
               { name: "tasks:*:$$DEF.ID$$"                 ,  description: "$$DEF.NAME$$ - todas perms sobre tasks $$MSG$$" },
               { name: "instances:delete:$$DEF.ID$$"        ,  description: "$$DEF.NAME$$ - apagar inst??ncias $$MSG$$" }
            ],
            roles: [
               {
                  name: "rm - $$DEF.NAME$$ - read",
                  description: "consultar $$MSG$$ ",
                  perms: [ "definitions:read:$$DEF.ID$$", "instances:read:$$DEF.ID$$" ]
               },
               {
                  name: "rm - $$DEF.NAME$$ - change",
                  description: "criar e alterar inst??ncias $$MSG$$",
                  perms: [
                     "definitions:instantiate:$$DEF.ID$$",
                     "instances:update:$$DEF.ID$$",
                     "tasks:*:$$DEF.ID$$",
                     "instances:delete:$$DEF.ID$$"
                  ]
               }
            ]
         }
      ]
   },
   {
      name: "Perms base Defini????o RM com delete separado",
      vars: [
         { name: "DEF"  , type: "RM-DEF", value: ""},
         { name: "MSG" , type: "simple"   , value: ""}
      ],
      productPerms: [
         {
            product: "recordm",
            perms: [
               { name: "definitions:read:$$DEF.ID$$"        ,  description: "$$DEF.NAME$$ - ler Defini????o $$MSG$$" },
               { name: "definitions:instantiate:$$DEF.ID$$" ,  description: "$$DEF.NAME$$ - criar novas inst??ncias $$MSG$$" },
               { name: "instances:read:$$DEF.ID$$"          ,  description: "$$DEF.NAME$$ - ler inst??ncias $$MSG$$" },
               { name: "instances:update:$$DEF.ID$$"        ,  description: "$$DEF.NAME$$ - update de inst??ncias $$MSG$$" },
               { name: "tasks:*:$$DEF.ID$$"                 ,  description: "$$DEF.NAME$$ - todas perms sobre tasks $$MSG$$" },
               { name: "instances:delete:$$DEF.ID$$"        ,  description: "$$DEF.NAME$$ - apagar inst??ncias $$MSG$$" }
            ],
            roles: [
               {
                  name: "rm - $$DEF.NAME$$ - read",
                  description: "consultar inst??ncias de $$DEF.NAME$$",
                  perms: [ "definitions:read:$$DEF.ID$$", "instances:read:$$DEF.ID$$" ]
               },
               {
                  name: "rm - $$DEF.NAME$$ - change",
                  description: "criar e alterar inst??ncias de $$DEF.NAME$$",
                  perms: [
                     "definitions:instantiate:$$DEF.ID$$",
                     "instances:update:$$DEF.ID$$",
                     "tasks:*:$$DEF.ID$$"
                  ]
               },
               {
                  name: "rm - $$DEF.NAME$$ - delete",
                  description: "apagar inst??ncias de $$DEF.NAME$$",
                  perms: [ "instances:delete:$$DEF.ID$$" ]
               }
            ]
         }
      ]
   },
   {
      name: "Perms separadas de $tasks para Defini????o RM",
      vars: [
         { name: "DEF"  , type: "RM-DEF", value: ""}
      ],
      productPerms: [
         {
            product: "recordm",
            perms: [
               { name: "tasks:create:$$DEF.ID$$"      ,  description: "$$DEF.NAME$$ - tasks - create" },
               { name: "tasks:assign:$$DEF.ID$$"      ,  description: "$$DEF.NAME$$ - tasks - assign" },
               { name: "tasks:complete:$$DEF.ID$$"    ,  description: "$$DEF.NAME$$ - tasks - complete" },
               { name: "tasks:delete:$$DEF.ID$$"      ,  description: "$$DEF.NAME$$ - tasks - delete" }
            ],
            roles: [
               {
                  name: "rm - $$DEF.NAME$$ - tasks create and delete",
                  description: "criar e apagar tarefas",
                  perms: [
                     "tasks:create:$$DEF.ID$$",
                     "tasks:delete:$$DEF.ID$$"
                  ]
               },
               {
                  name: "rm - $$DEF.NAME$$ - tasks assign",
                  description: "assignar tarefas",
                  perms: [
                     "tasks:assign:$$DEF.ID$$"
                  ]
               },
               {
                  name: "rm - $$DEF.NAME$$ - tasks complete",
                  description: "completar tarefas",
                  perms: [
                     "tasks:complete:$$DEF.ID$$"
                  ]
               }
            ]
         }
      ]
   },
   {
      name: "Perms base Dom??nio RM",
      vars: [
         { name: "ID", type: "RM-DOMAIN-ID", value: ""},
         { name: "NAME", type: "simple", value: "nome do dominio"},
         { name: "MSG", type: "simple", value: ""}
      ],
      productPerms: [
         {
            product: "recordm",
            perms: [
               { name: "domains:read:$$ID$$" ,  description: "$$NAME$$ - consultar $$MSG$$" }
            ],
            roles: [
               {
                  name: "rm - $$NAME$$ - domain",
                  description: "consultar dom??nio $$MSG$$",
                  perms: [ "domains:read:$$ID$$" ]
               }
            ]
         }
      ]
   }
]
