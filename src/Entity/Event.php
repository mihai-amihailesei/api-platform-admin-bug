<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\EventRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\IdGenerator\UuidGenerator;

#[ApiResource]
#[ORM\Entity(repositoryClass: EventRepository::class)]
class Event
{
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\Column(type: 'uuid', unique: true)]
    #[ORM\CustomIdGenerator(class: UuidGenerator::class)]
    private ?string $id = null;

    #[ApiProperty(
        openapiContext: [
            'type' => 'string',
            'enum' => [
                EventType::Type1->value,
                EventType::Type2->value,
                EventType::Type3->value,
            ],
            'example' => EventType::Type1->value
        ]
    )]
    #[ORM\Column(length: 255, enumType: EventType::class)]
    private ?EventType $type = null;

    public function getId(): ?string
    {
        return $this->id;
    }

    public function getType(): ?EventType
    {
        return $this->type;
    }

    public function setType(EventType $type): self
    {
        $this->type = $type;

        return $this;
    }
}
