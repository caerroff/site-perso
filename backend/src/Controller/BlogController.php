<?php

namespace App\Controller;

use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController
{
    #[Route('/blog', name: 'app_blog')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/BlogController.php',
        ]);
    }

    #[Route('/blog/{id}', name: 'app_blog_get', requirements: ['id' => '\d+'])]
    public function getPost(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $id = $request->get('id');
        $post = $em->getRepository(Post::class)->find($id);
        if ($post == null) {
            return $this->json(null, 500);
        }
        return $this->json($post);
    }

    #[Route('/blog/new', name: 'app_blog_new', methods: ['POST'])]
    public function new(Request $request){
        return $this->json($request);
    }
}
