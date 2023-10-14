<?php

namespace App\Controller;

use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

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
    public function getPost(Request $request, EntityManagerInterface $em, SerializerInterface $serializer): JsonResponse
    {
        $id = $request->get('id');
        $post = $em->getRepository(Post::class)->findOneBy(['id' => $id]);
        return $this->json($post, 200, [], ['groups' => 'json']);
    }

    #[Route('/blog/getIds', name: 'app_blog_list')]
    public function getIds(EntityManagerInterface $em): JsonResponse
    {
        $posts = $em->getRepository(Post::class)->findOrderPosted();
        $postIds = [];
        foreach ($posts as $post) {
            $postIds[] = $post->getId();
        }
//        dd($postIds);
        return $this->json($postIds, 200);
    }

    #[Route('/blog/new', name: 'app_blog_new', methods: ['POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function new(Request $request, EntityManagerInterface $em){
        $post = new Post();
        $post->setTitle($request->request->get('title'));
        $post->setAuthor($request->request->get('author'));
        $post->setCreatedAt(new \DateTimeImmutable($request->request->get('createdAt')));
        $post->setContent($request->request->get('content'));
        // $em->persist($post);
        // $em->flush();
        return $this->redirect('http://localhost:5173/blog');
    }
}
