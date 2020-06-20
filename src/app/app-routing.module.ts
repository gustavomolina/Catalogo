import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'list-products',
    loadChildren: () => import('./pages/list-products/list-products.module').then( m => m.ListProductsPageModule)
  },
  {
    path: 'list-users',
    loadChildren: () => import('./pages/list-users/list-users.module').then( m => m.ListUsersPageModule)
  },
  {
    path: 'cadastro-produtos',
    loadChildren: () => import('./cadastro-produtos/cadastro-produtos.module').then( m => m.CadastroProdutosPageModule)
  },
  {
    path: 'cadastro-usuarios',
    loadChildren: () => import('./cadastro-usuarios/cadastro-usuarios.module').then( m => m.CadastroUsuariosPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
